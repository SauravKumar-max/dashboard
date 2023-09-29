import { DataType } from "./utils.type";

export function getSearchedData( data: DataType[], searchText: string): DataType[] {
  if (searchText) {
    return data.filter((item) => {
      const name = item.name.toLowerCase();
      const email = item.email.toLowerCase();
      const country = item.country.toLowerCase();
      const company = item.company.toLowerCase();
      const phone = item.phone.toString();
      const searchValue = searchText.toLowerCase();
      return (
        name.includes(searchValue) ||
        email.includes(searchValue) ||
        country.includes(searchValue) ||
        company.includes(searchValue) ||
        phone.includes(searchValue)
      );
    });
  }
  return data;
}