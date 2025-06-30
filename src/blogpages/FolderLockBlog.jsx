import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FolderLockBlog = () => {
  return (
    <>
    <Navbar/>
    <div className="black pt-5 pb-5">
    
      <Helmet>
        <title>How to Lock a Folder Without Software – Windows Trick</title>
        <meta
          name="description"
          content="Step-by-step guide to lock folders on Windows without any third-party software. Just copy, paste, and secure your private data."
        />
        <meta property="og:image" content="/images/blog1.jpg" />
        <meta property="og:title" content="Lock Folder Without Software" />
        <meta
          property="og:description"
          content="Secure your data with this Windows trick – no software required."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          🔒 How to Lock a Folder Without Any Software
        </h1>

        <img
          src="/images/lock-folder-without-software-thumbnail.png"
          alt="Lock Folder Without Software"
          className="rounded-xl shadow-md mb-6 w-full"
        />

        <p className="text-lg mb-4">
          Want to protect your personal files without using third-party apps? This simple Windows trick
          lets you lock folders using just a batch file.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🛠️ Steps to Lock Your Folder:</h2>
        <ol className="list-decimal list-inside text-lg space-y-2 mb-4">
          <li>Create a new folder anywhere on your computer.</li>
          <li>Open Notepad and paste the code below:</li>
        </ol>

        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
{`cls
@ECHO OFF
title Folder Locker
if EXIST "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}" goto UNLOCK
if NOT EXIST Locker mkdir Locker
:CONFIRM
echo Are you sure you want to lock the folder? (Y/N)
set /p "cho=>"
if %cho%==Y goto LOCK
if %cho%==y goto LOCK
if %cho%==N goto END
if %cho%==n goto END
echo Invalid choice.
goto CONFIRM
:LOCK
ren Locker "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"
attrib +h +s "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"
echo Folder Locked
goto END
:UNLOCK
echo Enter Password to Unlock:
set /p "pass=>"
if NOT %pass%==YourPasswordHere goto FAIL
attrib -h -s "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"
ren "Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}" Locker
echo Folder Unlocked
goto END
:FAIL
echo Invalid password
goto END
:END`}
        </pre>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 my-4 rounded">
          <strong>Note:</strong> Replace <code>YourPasswordHere</code> with your desired password.
        </div>

        <p className="text-lg mb-4">
          Save the file as <code>locker.bat</code> in the same folder where your files are.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📂 How It Works:</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-4">
          <li>A folder named “Locker” will be created.</li>
          <li>Put your private files inside it.</li>
          <li>Run <code>locker.bat</code> and follow the prompt to lock/unlock.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">💡 Tips:</h2>
        <ul className="list-disc list-inside text-lg space-y-2 mb-6">
          <li>Don’t share the batch file if your password is visible in plain text.</li>
          <li>For sensitive files, consider additional encryption methods.</li>
        </ul>

        <p className="text-center font-semibold text-xl text-green-600">
          🎉 You’ve successfully locked your folder without installing any software!
        </p>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default FolderLockBlog;
