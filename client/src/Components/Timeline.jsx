import React, { useEffect, useState } from "react";
import Title from "./Title";

function Timeline() {

  return (
    <div className="max-w-screen-xl mx-auto">
      <Title
        title="Dev Info"
        subTitle="Unveiling My Passions, Skills, and Journey"
        desc="Passionate, adaptable individual with a love for problem-solving and creativity, dedicated to continuous learning and growth in diverse environments."
      />
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-10">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start md:text-end mb-10">
            <h2 className="text-2xl text-primary font-semibold">
              Mohammad Asraful Islam Masum
            </h2>
            <h4 className="text-white font-semibold text-lg">Web Developer</h4>
            <p>Email: h.m.asrafulmasum@gmail.com</p>
            <p>Phone: +880 1687-177481</p>
            <p>Address: Vashantek, Dhaka-Cant. Dhaka-1206</p>
          </div>

          <hr />
        </li>

        <li>
          <hr />

          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-end mb-10">
            <time className="font-mono italic text-primary">2014</time>
            <div className="text-lg font-semibold text-white">
              Secondary School Graduation
            </div>
            I graduated from Vashantek High School at Vashantek, Dhaka-Cant.
            Dhaka-1206 in 2014 with a Secondary School Cirtificate, earning a
            competitive GPA with 4.88. During my time there, I excelled in
            advanced coursework such as Advanced Mathematics, and English
            Literature. Beyond academics, I was actively involved in
            extracurricular activities, serving as the captain of the Debate
            Team, a member of the Math Club, and a volunteer in the Annual
            Ceremony Program.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic text-primary">2016</time>
            <div className="text-lg font-semibold text-white">
              Higher Secondary Graduation
            </div>
            I graduated from Shaheed Police Smrity College at Mirpur-14, Dhaka
            in 2016, earning my Higher Secondary Certificate with distinction.
            My academic focus included subjects such as Physics, Chemistry,
            Mathematics, and Computer Science, where I consistently performed at
            the top of my class. During my higher secondary education, I was
            awarded the Excellence in Science award and was an active member of
            the Science Club and the Coding Club. I also participated in
            regional science fairs, where I presented a project on Solar Energy,
            winning first place at my Zone. Additionally, I volunteered as a
            tutor for underclassmen, helping them improve their understanding of
            complex subjects.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic text-primary">2021</time>
            <div className="text-lg font-semibold text-white">
              Bachelor of Science Graduation
            </div>
            I graduated with a Bachelor of Science in Computer Science from
            Daffodil International University in April 2021. My coursework
            included advanced topics such as Data Structures and Algorithms,
            Software Engineering, Database Systems, and Artificial Intelligence.
            I am at the end of my final project on developing a E-Commerce
            Website as like Bikroy.com, which is on work. Additionally, I was
            actively involved in extracurricular activities, member of the
            Computer Science Club and volunteering for the Coding for Kids
            program, where I helped teach programming skills to young students.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic text-primary">2024</time>
            <div className="text-lg font-semibold text-white">
              Complete Web Development Course
            </div>
            I completed a Web Development course at Programming Hero in January
            2024, where I gained comprehensive knowledge and practical skills in
            front-end and back-end development. The course covered essential
            technologies such as HTML, CSS, JavaScript, React, Node.js, Express,
            MongoDB, and Mongoose. Through hands-on projects, I developed
            several responsive websites and web applications, including an
            Assignment Manegement website, a Event manegement website fornt-end
            and a personal website. One of my notable projects was a
            Forum-threads website that featured user authentication, real-time
            updates, and a RESTful API. This course enhanced my problem-solving
            abilities and provided me with a strong foundation in modern web
            development practices.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-2xl font-semibold text-primary">Technologies</div>
            <p>
              Proficient in a diverse range of technologies including HTML, CSS,
              JavaScript, React, Node.js, Express, MongoDB, Mongoose, and Framer
              Motion. With hands-on experience, I've built dynamic web
              applications, ensuring seamless database management with Mongoose
              and MongoDB integration, while enhancing user experiences through
              Framer Motion's interactive interface elements.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
