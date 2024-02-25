import axios from "axios";

// Define your data object
// const dataToSend = {
//   key: {
//     // Your key data here
//   },
//   value: {
//     // Your value data here
//   },
// };

// Function to send data to FastAPI endpoint
export const produceEvent = async (
  eventName,
  eventDescription,
  userId = sessionStorage.getItem("sessionID"),
  eventValue = ""
) => {
  const dataToSend = {
    key: {
      eventName: eventName,
      userId: userId,
    },
    value: {
      timestamp: Date.now(),
      eventValue: eventValue,
      eventDescription: eventDescription,
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:8000/produce",
      dataToSend
    );
    console.log("Response:", response.data);
    // Handle response if needed
  } catch (error) {
    console.error("Error:", error);
    // Handle error if needed
  }
};
