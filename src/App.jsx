function App() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex w-sm gap-4 rounded-xl p-6 shadow-lg outline outline-black/5">
        <img
          className="size-12 rounded-xs"
          src="https://picsum.photos/seed/picsum/200/300"
          alt="message"
        />
        <div>
          <div className="text-xl font-medium">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
