function Example2() {
  return (
    <div className="my-card">
      <div className="flex w-sm items-center gap-4 rounded-xl p-8 outline outline-black/5 @min-[640px]:@max-[1024px]:flex-col">
        <img
          className="size-24 rounded-full"
          src="https://picsum.photos/seed/picsum/200/300"
          alt="message"
        />
        <div className="">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="flex cursor-pointer items-center justify-center rounded-3xl border border-purple-200 px-2 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Message
          </button>
          <div class="card rounded-none">Mua hàng</div>
        </div>
      </div>
    </div>
  );
}

export default Example2;
