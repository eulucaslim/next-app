import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-black">
      <h2 className='text-4xl text-white'>Hello World</h2>
      <div className="flex justify-center items-center">
        <Button variant="secondary">Button</Button>
      </div>
    </div>
  );
}
