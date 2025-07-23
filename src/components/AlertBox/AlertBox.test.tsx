import AlertBox from "./AlertBox";

export default function AlertBoxTest() {
  return (
    <AlertBox
      type="success"
      message="Your profile has been updated successfully!"
      onClose={() => alert("Alert closed")}
    >
      <p className="text-sm">You can now continue using the application.</p>
    </AlertBox>
  );
}
