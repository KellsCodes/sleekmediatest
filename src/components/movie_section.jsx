import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { themeColors } from "../theme";
import Movie_card from "./movie_card";

export default function Movie_section() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d9176a5c&s=${search}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d9176a5c&t=movie`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <Box as="section" mt="38px">
      <form onSubmit={searchMovie}>
        <FormControl
          w={["calc(100% - 40px)", "calc(100% - 35px)", "calc(100% - 155px)"]}
          mb="38px"
          mx="auto"
        >
          <FormLabel fontSize="14px" mb="0">
            Search
          </FormLabel>
          <Input
            type="text"
            border="1px"
            borderColor={themeColors.gray}
            borderRadius="0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
      </form>

      <Stack
        ml={["20px", "20px", "77px"]}
        mb="60px"
        spacing={"60px"}
        direction="column"
      >
        <Box>
          <Text>Movie category name</Text>
          <Box
            overflowX="auto"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box display="flex" alignItems="center" gap="13px" w={"100vw"}>
              {[1, 3, 4, 5, 6].map((item) => (
                <Movie_card key={item} />
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Text>Movie category name</Text>
          <Box
            overflowX="auto"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box display="flex" alignItems="center" gap="13px" w="100vw">
              {[1, 3, 4, 5, 6].map((item) => (
                <Movie_card key={item} />
              ))}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
