const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-theme-light min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-between px-6 py-32 mx-auto">
        <div className="w-full bg-white rounded-lg shadow-2xl shadow-[#DEE2E6] max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
