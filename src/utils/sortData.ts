import { DataType } from "./utils.type";

export function getSortedData(data: DataType[], sortBy: string): DataType[] {
    if (sortBy === "old" || sortBy === "new") {
      const oldData = data.filter(item => item.tag === "old");
      const newData = data.filter(item => item.tag === "new");
      if(sortBy === "old"){
        return [...oldData, ...newData];
      }else {
        return [...newData, ...oldData];
      }
    }

    if (sortBy === "active" || sortBy === "inactive") {
      const activeData = data.filter(item => item.status === "Active");
      const inactiveData = data.filter(item => item.status === "Inactive");
      if(sortBy === "active"){
        return [...activeData, ...inactiveData];
      }else {
        return [...inactiveData, ...activeData];
      }
      
    }
    return data;
  }