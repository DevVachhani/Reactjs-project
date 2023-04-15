// domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addEventMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addEventMeetupHandler} />;
}

export default NewMeetupPage;
