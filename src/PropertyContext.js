import React, { Component } from "react";
import client from "./Contentful";

const PropertyContext = React.createContext();

class PropertyProvider extends Component {
  state = {
    properties: [],
    sortedProperties: [],
    featuredProperties: [],
    loading: true,
    type: "all",
    bedroom: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    pets: false
  };
  getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "dreamHome",
        order: "sys.createdAt"
      });

      let properties = this.formatData(response.items);
      let featuredProperties = properties.filter(property => property.featured);
      let maxPrice = Math.max(...properties.map(property => property.price));
      this.setState({
        properties,
        featuredProperties,
        loading: false,
        sortedProperties: [...properties],
        price: maxPrice,
        maxPrice
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let property = { ...item.fields, images, id };
      return property;
    });
    return tempItems;
  };

  getPro = slug => {
    let tempProperty = [...this.state.properties];
    const property = tempProperty.find(property => property.slug === slug);
    return property;
  };
  resetPros = () => {
    const { properties, maxPrice } = this.state;
    this.setState({
      sortedProperties: properties,
      type: "all",
      price: maxPrice,
      bedroom: 1,
      pets: false
    });
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterProperties
    );
    // console.log(this.state.type);
  };
  filterProperties = () => {
    let { properties, type, bedroom, price, pets } = this.state;
    let filteredProperties = [...properties];
    bedroom = parseInt(bedroom);
    price = parseInt(price);

    // Filter by type
    if (type !== "all") {
      filteredProperties = filteredProperties.filter(
        property => property.type === type
      );
    }

    // Filter by bedroom
    filteredProperties = filteredProperties.filter(
      property => property.bedroom >= bedroom
    );

    // Filter by price
    filteredProperties = filteredProperties.filter(
      property => property.price <= price
    );

    // filter by pets
    if (pets) {
      filteredProperties = filteredProperties.filter(
        property => property.pets === true
      );
    }
    this.setState({
      sortedProperties: filteredProperties
    });
  };
  render() {
    return (
      <PropertyContext.Provider
        value={{
          ...this.state,
          getPro: this.getPro,
          handleChange: this.handleChange,
          resetPros: this.resetPros
        }}
      >
        {this.props.children}
      </PropertyContext.Provider>
    );
  }
}

const PropertyConsumer = PropertyContext.Consumer;
export function withPropertyConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PropertyConsumer>
        {value => <Component {...props} context={value} />}
      </PropertyConsumer>
    );
  };
}
export { PropertyProvider, PropertyConsumer, PropertyContext };
