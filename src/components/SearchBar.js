// import * as React from 'react';
// import  { Searchbar }  from "react-native-search-box";
// import { useState } from 'react';

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const onChangeSearch = query => setSearchQuery(query);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
  
//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };

// export default SearchBar;