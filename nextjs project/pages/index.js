import MeetupList from "../components/meetups/MeetupList";

const DUMMY_Meetups = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    address: "some Address 5 , city 4",
    description: "this is first meet up",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    address: "some Address 7 , city 2",
    description: "this is second meet up",
  },
];

function Homepage() {
  return <MeetupList meetup={DUMMY_Meetups} />;
}

export default Homepage;
