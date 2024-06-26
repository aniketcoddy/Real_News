'use client'
import React, { useMemo, useRef, useState } from "react";
// import JoditEditor from "jodit-react";

const Admin = () => {
  // const editor = useRef(null);

  // const [content, setContent] = useState("  ");
  // const [postTitle, setPostTitle] = useState("");
  // const [postBrief, setPostTitle] = useState("");
  // const [tags, setPostTitle] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  // const [postTitle, setPostTitle] = useState("");

  // const handleTitleChange = (event) => {
  //   setPostTitle(event.target.value);
  // };

  return (
    <div className="p-1  lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 col-start-1 col-end-3 row-start-2 row-end-3">
      <div className="border-[1px] flex my-7 gap-6 mx-4 xl:m-7 xl:gap-6 xl:mx-13 flex-col rounded-md w-[330px] xs:w-[423px] xm:w-[509px] sm:w-[604px] md:w-[732px] lg:w-[982px]  xl:w-[929px] 2xl:w-[1185px] 3xl:w-[1566px] bg-white border-[#D7D7D7] lg:p-6 p-3">
        <div>
          <h1 className="text-[#141417] text-2xl font-medium">Create a post</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Post Title"
              id="postTitle"
              // value={postTitle}
              // onChange={handleTitleChange}
              className="border-[1px] border-[#D7D7D7] text-lg p-1 px-2 rounded-sm  w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Post Brief"
              id="postTitle"
              // value={postBrief}
              // onChange={handleTitleChange}
              className="border-[1px] border-[#D7D7D7] text-lg text-start  p-1 px-2 h-16 rounded-sm w-full"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Tags"
              id="postTitle"
              // value={tags}
              // onChange={handleTitleChange}
              className="border-[1px] border-[#D7D7D7] text-lg p-1 px-2 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Date"
              id="postTitle"
              // value={Date}
              // onChange={handleTitleChange}
              className="border-[1px] border-[#D7D7D7] text-lg p-1 px-2 rounded-sm w-36"
            />
          </div>
          <div>
            {/* <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => setContent(newContent)}
            /> */}
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-[#141417] text-base font-medium"
              for="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 p-1  focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Lesson"
              id="postTitle"
              // value={Lesson}
              // onChange={handleTitleChange}
              className="border-[1px] border-[#D7D7D7] text-lg p-1 px-2 rounded-sm w-full h-36"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="flex justify-end text-[#034D13] text-sm md:text-base lg:text-xl font-medium">
              Add Comment
            </h1>
            <div className=" flex flex-col gap-6">
              <div className="flex flex-col z-50">
                <input
                  type="text"
                  placeholder="Write comment"
                  id="postTitle"
                  // value={Comment}
                  // onChange={handleTitleChange}
                  className="border-[1px] border-[#D7D7D7] text-lg p-1 px-2  w-full h-28"
                />
                <div className="border-[1px] border-[#D7D7D7] border-t-0 bg-white flex justify-end ">
                  <div className="flex gap-5 mr-4 my-1">
                    <button className="text-sm md:text-base lg:text-xl text-[#4E88D8]">Reply</button>
                    <button className="text-sm md:text-base lg:text-xl text-[#F25424]">Delete</button>
                  </div>
                </div>
              </div>

              <div className="absolute border-[1px] h-60 w-28 ml-5 border-r-0 border-[#D7D7D7]"></div>

              <div className="flex flex-col ml-11 z-50">
                <input
                  type="text"
                  placeholder="Write comment"
                  id="postTitle"
                  // value={reply}
                  // onChange={handleTitleChange}
                  className="border-[1px] border-[#D7D7D7] text-lg p-1 px-2  w-full h-28"
                />
                <div className="border-[1px] border-[#D7D7D7] border-t-0 flex w-full justify-end">
                  <div className="flex gap-5 mr-4 my-1">
                    <button className="text-sm md:text-base lg:text-xl text-[#4E88D8] font-medium">
                      Reply
                    </button>
                    <button className="text-sm md:text-base lg:text-xl text-[#F25424] font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="rounded-md p-2 bg-[#35b350]"
          >
            Add a Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
