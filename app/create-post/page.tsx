"use client";
import React, { useState } from "react";
import { Modal, Button, TextInput, Textarea, Group } from "@mantine/core";
import { useMutation, gql } from "@apollo/client";

// Define the GraphQL mutation
const CREATE_POST_MUTATION = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const CreatePostPage = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createPost, { data, loading, error }] =
    useMutation(CREATE_POST_MUTATION);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createPost({
        variables: {
          input: { title, body, userId: 1 },
        },
      });
      alert("Post created successfully!");
      setTitle("");
      setBody("");
      setModalOpened(false);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Group justify="center">
        <Button onClick={() => setModalOpened(true)}>Create Post</Button>
      </Group>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Create a New Post"
        centered
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            mb="sm"
          />
          <Textarea
            label="Body"
            placeholder="Enter post content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            minRows={4}
            mb="sm"
          />
          <Group justify="right">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Submit"}
            </Button>
          </Group>
        </form>
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Error: {error.message}
          </p>
        )}
      </Modal>
    </div>
  );
};

export default CreatePostPage;
