const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16">
      <div className="max-w-md text-center space-y-6">

        {/* Welcome Text */}
        <h2 className="text-3xl font-extrabold text-blue-500">
          Welcome to Your Messaging Hub
        </h2>
        <p className="text-base-content/70 text-lg">
          Select a conversation from the sidebar or start a new chat to connect
          with your contacts seamlessly.
        </p>
      </div>
    </div>
  );
};


export default NoChatSelected;