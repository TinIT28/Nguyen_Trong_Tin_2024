import { Avatar, Card, Skeleton, Modal, Flex } from "antd";
import React, { useState, Fragment } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CardBlog = ({ blogs, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {blogs && blogs.length > 0 ? (
        <Fragment>
          {blogs.map((post, index) => (
            <Fragment key={post._id}>
              <Card
                style={{
                  width: 600,
                  marginTop: 16,
                }}
                actions={[
                  <div onClick={showModal}>
                    {post.comments.length > 1
                      ? `${post.comments.length} comments`
                      : `${post.comments.length} comment`}
                  </div>,
                ]}
                extra={<Link to="#">More</Link>}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={post.title}
                    description={
                      <div>
                        <p>{post.author.fullName}</p>
                        {format(new Date(post.createdAt), "dd-MM-yyyy")}
                      </div>
                    }
                  />

                  <div className="content">{post.content}</div>
                </Skeleton>
              </Card>
              <Modal
                title="Comments"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                {post.comments.length > 0 &&
                  post.comments.map((comment, index) => (
                    <Card
                      style={{
                        width: "100%",
                        marginTop: 16,
                      }}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title={comment.author?.fullName}
                        description={
                          <div>
                            {format(new Date(comment?.createdAt), "dd-MM-yyyy")}
                          </div>
                        }
                      />

                      <div className="content">{comment?.content}</div>
                    </Card>
                  ))}
              </Modal>
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
};
export default CardBlog;
