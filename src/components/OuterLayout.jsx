import React from 'react';
import { Search, Download, Settings, FileText, User,HomeIcon } from 'lucide-react';
import { Input } from './ui/input';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#081028] text-white p-6">
        
      <div className="max-w-7xl mx-auto">
        {/* Sidebar */}
        

        <div className="fixed left-6  w-64 h-[95%]  backdrop-blur-sm rounded-lg p-4 z-10">
          {/* Search Bar */}
  <div className='text-2xl font-medium mb-6'>
                Dashboard
            </div>
          
          <div className="relative  bg-[#0B1739] mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search for..." 
              className="pl-10 bg-[#0B1739] border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>
          
          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            
            <div className="flex items-center gap-3 px-3 py-2 bg-purple-600/20 rounded-lg text-purple-400 border border-purple-500/30">
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg cursor-pointer transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg cursor-pointer transition-colors">
              <FileText className="h-4 w-4" />
              Template pages
            </div>
          </nav>

          {/* User Profile */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">John Carter</div>
                <div className="text-xs text-slate-400 truncate">Account settings</div>
              </div>
            </div>
          </div>
        </div>


        {/* Main Content Area */}
        <div className="ml-72">
            <div className='text-2xl font-medium mb-6'>
                Analytics
            </div>
          {children}
        </div>
      </div>
    </div>
  );
};


export default DashboardLayout;