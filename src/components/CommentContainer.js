import React from "react";
import {useState } from "react";
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
    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-2 sm:p-3 my-2 bg-gray-100 rounded-xl shadow-md w-full">
      <img
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-colors"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="flex-1">
        <p className="font-semibold text-base sm:text-lg dark:text-black">
          {name} {getRandomEmoji()}
        </p>
        <p className="text-sm sm:text-base text-gray-700 break-words">{text}</p>
        <div className="flex gap-4 mt-2 text-gray-600">
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
      <div className="pl-3 sm:pl-5 ml-3 sm:ml-5 border-l-2 border-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};


const CommentContainer = () => {
  const [showComments, setShowComments] = useState(true);

  return (
    <div className="mt-6 bg-white dark:bg-gray-900 text-black dark:text-white px-3 sm:px-6 rounded-xl transition-colors">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl text-blue-700 font-bold mb-2">Comments:</h1>

        {/* Toggle button visible ONLY on small devices */}
        <button
          className="sm:hidden bg-blue-600 text-white px-3 py-1 text-sm rounded-md"
          onClick={() => setShowComments((prev) => !prev)}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {/* Conditionally render comment list */}
      {(showComments || window.innerWidth >= 640) && (
        <CommentList comments={commentsData} />
      )}
    </div>
  );
};

export default CommentContainer;