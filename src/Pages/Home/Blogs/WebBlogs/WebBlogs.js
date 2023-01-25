import React from 'react';
import webSquareImage from '../../../../assests/images/blogs/web/web-square.png';
import webRectangleImage from '../../../../assests/images/blogs/web/web-rectangle.png';
import WebBlog from '../WebBlog/WebBlog';

const WebBlogs = () => {
    const webBlogs = [
        {
            "_id": "1",
            "tag": "web-development",
            "pictureSquare": webSquareImage,
            "pictureRectangle": webRectangleImage,
            "title": "ওয়েব ডেভেলপমেন্ট পরিচিতি-যা কিছু জানা প্রয়োজন",
            "details": "আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে। আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে।",
            "bloggerName": "Abir Hasan",
            "blogDate": "jan-19-2023"
        },
        {
            "_id": "2",
            "tag": "web-development",
            "pictureSquare": webSquareImage,
            "pictureRectangle": webRectangleImage,
            "title": "ওয়েব ডেভেলপমেন্ট পরিচিতি-যা কিছু জানা প্রয়োজন",
            "details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur incidunt provident quam neque. Deleniti laudantium asperiores pariatur ea fuga quo, sed inventore laboriosam sequi molestias, ipsam expedita omnis vitae molestiae!",
            "bloggerName": "Abir Hasan",
            "blogDate": "jan-19-2023"
        },
        {
            "_id": "3",
            "tag": "web-development",
            "pictureSquare": webSquareImage,
            "pictureRectangle": webRectangleImage,
            "title": "ওয়েব ডেভেলপমেন্ট পরিচিতি-যা কিছু জানা প্রয়োজন",
            "details": "আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে। আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে।",
            "bloggerName": "Abir Hasan",
            "blogDate": "jan-19-2023"
        },
        {
            "_id": "4",
            "tag": "web-development",
            "pictureSquare": webSquareImage,
            "ppictureRectangle": webRectangleImage,
            "title": "ওয়েব ডেভেলপমেন্ট পরিচিতি-যা কিছু জানা প্রয়োজন",
            "details": "আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে। আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে।",
            "bloggerName": "Abir Hasan",
            "blogDate": "jan-19-2023"
        },
        {
            "_id": "5",
            "tag": "web-development",
            "pictureSquare": webSquareImage,
            "pictureRectangle": webRectangleImage,
            "title": "ওয়েব ডেভেলপমেন্ট পরিচিতি-যা কিছু জানা প্রয়োজন",
            "details": "আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে। আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে।",
            "bloggerName": "Abir Hasan",
            "blogDate": "jan-19-2023"
        },
        {
            "_id": "6",
            "tag": "web-development",
            "pictureSquare": webSquareImage,
            "pictureRectangle": webRectangleImage,
            "title": "ওয়েব ডেভেলপমেন্ট পরিচিতি-যা কিছু জানা প্রয়োজন",
            "details": "আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে। আমাদের প্রথমে জানতে হবে যে ওয়েব ডেভেলপমেন্ট কি? স্বাভাবিক ভাসায় বলতে গেলে ইন্টারনেট (প্রাইভেট নেটওয়ার্ক) এর জন্য যে সকল ওয়েবসাইট, সফটওয়্যার ও অ্যাপ্লিকেশন তৈরি করা হয় এগুলো প্রবর্তন করার কৌশল অবলম্বন করাকে বলে ওয়েব ডেভেলপমেন্ট। আমরা অনেকে আছি যারা এখনো জানিনা যে ওয়েব ডেভেলপমেন্ট আর ওয়েব ডিজাইনিং কি।আসলে এইটা কিন্ত এক না অনেক পার্থক্য রয়েছে।",
            "bloggerName": "Abir Hasan",
            "blogDate": "jan-19-2022"
        },
    ]
    return (
        <div>
            <h2>web blogssss</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-44'>
                {
                    webBlogs.map(webBlog => <WebBlog
                        key={webBlog._id}
                        webBlog={webBlog}
                    ></WebBlog>)
                }
            </div>
        </div>
    );
};

export default WebBlogs;