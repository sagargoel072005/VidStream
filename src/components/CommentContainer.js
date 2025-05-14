import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const emojis = ["😄", "🔥", "💬", "😂", "👍", "❤️", "😎", "👀"];

const getRandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const commentsData = [
  {
    name: "Sagar Goel",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vansh Mudgal",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Sagar Goel",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Vansh Mudgal",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Pratham Shukla",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Vansh Mudgal",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Pratham Shukla",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Sagar Goel",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Sagar Goel",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sagar Goel",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Vansh Mudgal",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Sagar Goel",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sagar Goel",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Vansh Mudgal",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Pratham Shukla",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sagar Goel",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Pratham Shukla",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Sagar Goel",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sagar Goel",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Pratham Shukla",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Sagar Goel",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start gap-3 p-3 my-2 bg-gray-100 rounded-xl shadow-md">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="flex-1">
        <p className="font-semibold text-lg">{name} {getRandomEmoji()}</p>
        <p className="text-gray-700">{text}</p>
        <div className="flex gap-3 mt-2 text-gray-600">
          <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          <ThumbsDown className="w-5 h-5 cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l-2 border-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="mt-6 bg-white rounded-xl">
      <h1 className="text-2xl text-blue-700 font-bold mb-4">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
