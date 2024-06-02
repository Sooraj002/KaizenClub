// import React from "react";
// import GitHub from "@mui/icons-material/GitHub";
import Member from "../../components/Member/Member";
import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import Slide from "../../components/Slider/slider";

const membersData = [
  {
    name: "Shreehita",
    post: "Founder",
    img: "Shree.jpg",
    linkedin: "https://www.linkedin.com/in/sreehithathati03",
  },
  {
    name: "Krish",
    post: "Founder",
    img: "Krish.jpg",
    linkedin: "https://www.linkedin.com/in/krish-k-498774234",
    github: "https://github.com/krishkh",
  },
  {
    name: "Adista",
    post: "Member",
    img: "Adista.jpg",
    linkedin: "https://www.linkedin.com/in/adista-nautiyal-3011a7294",
  },
  {
    name: "Piyush",
    post: "Member",
    img: "Piyush.jpg",
    linkedin: "https://www.linkedin.com/in/piyush-kumar-prog",
    github: "https://github.com/piyushkumar-prog",
  },
  {
    name: "Manisha",
    post: "Member",
    img: "Manisha.jpg",
    linkedin: "https://www.linkedin.com/in/manisha-singh-2994b1294",
  },
  {
    name: "Ayush",
    post: "Member",
    img: "Ayush.jpg",
    linkedin: "https://www.linkedin.com/in/aayush-singh-6b5978253",
  },
  {
    name: "Sanskriti",
    post: "Member",
    img: "Sanskriti.jpg",
    linkedin: "https://www.linkedin.com/in/sanskriti-srivastava-b3876b298",
  },
  {
    name: "Aditya",
    post: "Member",
    img: "Aditya.png",
    linkedin: "",
  },
  {
    name: "Kanak",
    post: "Member",
    img: "Kanak.jpg",
    linkedin: "https://www.linkedin.com/in/kanak-saini-524420283",
  },
  {
    name: "Anurag",
    post: "Member",
    img: "Anurag.jpg",
    linkedin: "https://www.linkedin.com/in/anurag-raj-821214216",
    github: "https://github.com/Anurag07-07",
  },
  {
    name: "Avinash",
    post: "Member",
    img: "Avinash.jpg",
    linkedin: "https://www.linkedin.com/in/avinash-bajpai",
    github: "https://github.com/Devavinashh",
  },
  {
    name: "Shivansh",
    post: "Member",
    img: "Shivansh.jpg",
    linkedin: "https://www.linkedin.com/in/shivansh-saxena-58215a29b",
    github: "https://github.com/shivansh4565",
  },
  {
    name: "Sooraj",
    post: "Member",
    img: "Sooraj.jpg",
    linkedin: "https://www.linkedin.com/in/sooraj-bhaskar-nambiar",
    github: "https://github.com/Sooraj002",
  },
];

const Members = () => {
  // console.log();
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Heading text={"Our Team"} />
      <div className="flex m-10 flex-wrap justify-evenly items-center gap-3">
        {membersData.map((member) => (
          <Slide>
            <Member
              key={member.name}
              name={member.name}
              post={member.post}
              img={member.img}
              linkedin={member.linkedin}
              github={member.github}
            />
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Members;