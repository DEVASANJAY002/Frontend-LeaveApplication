import ProfileUpdate from "../components/ProfileUpdate";



export default function ProfilePage(){
  return(
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p>Employee profile details will be displayed here.</p>
      <ProfileUpdate />
    </div>
  );
}
