import type { UserProfileCardProps } from "../../types";


//this component creates and displays a profile card
export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="bg-white py-7 rounded-md leading-7 w-sm text-center self-center">
      <h2 className="font-bold text-black">{user.name}</h2>
      <p className="text-gray-700">{showEmail ? user.email : "email hidden"}</p>
      <p className="text-gray-700">{showRole ? user.role : "role hidden"}</p>
      {children}
      {onEdit && (
        <button className="bg-blue-500 w-80 rounded-sm"  type="button" onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}
    </div>
  );
}
