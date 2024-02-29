import React, { useState, useEffect } from "react";
import { Layout, Flex, Input, Button, Tooltip } from "antd";
import Header from "../layouts/Header";
import CardBlog from "./CardBlog";
import "./Home.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsRequest } from "../../redux/actions/postActions";

const Home = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const dispatch = useDispatch();
  const { loading, posts, success } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPostsRequest());
  }, [dispatch]);

  useEffect(() => {
    // Set filteredBlogs to posts when posts are initially fetched
    setFilteredBlogs(posts);
  }, [posts]);

  const handleSearch = () => {
    if (searchTitle.trim() === "") {
      setFilteredBlogs(posts); // If search title is empty, set filteredBlogs to all posts
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <Flex gap="middle" wrap="wrap" vertical>
      <Header />

      <Flex
        gap="middle"
        wrap="wrap"
        vertical
        align="center"
        className="home-container"
      >
        <div className="search">
          <Input
            size="large"
            placeholder="Search by title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Tooltip title="search">
            <Button
              shape="circle"
              icon={<SearchOutlined />}
              onClick={handleSearch}
            />
          </Tooltip>
        </div>
        {/* Pass filteredBlogs as a prop to CardBlog */}
        <CardBlog blogs={filteredBlogs} loading={loading} />
      </Flex>
    </Flex>
  );
};

export default Home;
