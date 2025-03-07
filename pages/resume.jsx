import Head from "next/head";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <Head>
        <title>Resume - Pavan Kumar</title>
      </Head>

      <h2 className="text-[#F76806] text-2xl font-bold pl-4 mb-4">Resume - Pavan Kumar</h2>

      <iframe
        src="/DVPAVANKUMAR_RESUME.pdf"
        className="w-full max-w-3xl h-screen border rounded-lg"
      ></iframe>

      <div className="mt-4 flex space-x-4">
        <a
          href="/DVPAVANKUMAR_RESUME.pdf"
          download
          className="px-4 py-2 bg-[#F76806] text-white rounded-lg shadow transition duration-300 hover:bg-[#d35605] hover:text-white"
        >
          Download Resume
        </a>
        
        <Link href="/">
          <a className="px-4 py-2 bg-[#F76806] text-white rounded-lg shadow transition duration-300 hover:bg-[#d35605] hover:text-white">Home</a>
        </Link>
      </div>
    </div>
  );
}
