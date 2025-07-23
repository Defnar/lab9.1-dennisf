import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="">
      <h2>{user.name}</h2>
      <p>{showEmail ? user.email : "email hidden"}</p>
      <p>{showRole ? user.role : "role hidden"}</p>
      <p>{children}</p>
      {onEdit && (
        <button type="button" onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}
    </div>
  );
}
