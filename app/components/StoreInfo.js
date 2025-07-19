import checkAuth from "../lib/checkAuth";

function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Manage Users</h1>
      {/* Future implementation here */}
    </div>
  );
}

export default checkAuth(UsersPage);
