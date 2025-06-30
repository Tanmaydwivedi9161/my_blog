
import './App.css'
import {createBrowserRouter,RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import PythonNotRecognizedBlog from './blogpages/PythonNotRecognizedBlog'
import FolderLockBlog from './blogpages/FolderLockBlog'
import SaveAndOpenLinkBlog from './blogpages/SaveAndOpenLinksBlog'
import CMDCommandsBlog from './blogpages/CMDCommandsBlog'
import RandomNumberBlog from './blogpages/RandomNumberBlog'
import OpenTerminalVSCodeBlog from './blogpages/OpenTerminalVSCodeBlog'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import SystemConfigurationBlog from './blogpages/SystemConfigurationBlog'
import PasswordProtectBrowserBlog from './blogpages/PasswordProtectBrowserBlog'
import AutoShutdownBlog from './blogpages/AutoShutdownBlog'
import RunPythonOnlineBlog from './blogpages/RunPythonOnlineBlog'
import KeyboardShortcutsBlog from './blogpages/KeyboardShortcutsBlog'
import NodejsServerBlog from './blogpages/NodejsServerBlog'

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/privacy-policy',
      element:<PrivacyPolicy/>
    },
    {
      path:'/terms-and-conditions',
      element:<TermsAndConditions/>
    },
    {
      path:'/blog/folder-lock',
      element:<FolderLockBlog/>
    },
    {
      path:'/blog/fix-python-not-recognized',
      element:<PythonNotRecognizedBlog/>
    },
    {
      path:'/blog/one-click-multipal-websites',
      element:<SaveAndOpenLinkBlog/>
    },
    {
      path:'/blog/useful-cmd-commands',
      element:<CMDCommandsBlog/>
    },
    {
      path:'/blog/random-number-generator',
      element:<RandomNumberBlog/>
    },
    {
      path:'/blog/open-terminal-vscode',
      element:<OpenTerminalVSCodeBlog/>
    },
    {
      path:'/blog/system-configuration',
      element:<SystemConfigurationBlog/>
    },
    {
      path:'/blog/password-protect-browser',
      element:<PasswordProtectBrowserBlog/>
    },
    {
      path:'/blog/auto-shutdown',
      element:<AutoShutdownBlog/>
    },
    {
      path:'/blog/run-python-online',
      element:<RunPythonOnlineBlog/>
    },
    {
      path:'/blog/keyboard-shortcuts-windows',
      element:<KeyboardShortcutsBlog/>
    },
    {
      path:'/blog/setup-web-server-nodejs',
      element:<NodejsServerBlog/>
    }
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
