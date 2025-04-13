import React from 'react';
import ParentCommunityNavbar from '@/components/ParentCommunityNavbar';

const ParentCommunity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParentCommunityNavbar />
      
      <main className="flex-grow container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Parent Community</h1>
          
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to our Parent Community</h2>
            <p className="text-gray-600 mb-6">
              Connect with other parents, share experiences, and get support in your parenting journey.
            </p>
            
            {/* Add your community features here */}
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-medium mb-3">Discussion Forums</h3>
                <p className="text-gray-500">Join conversations on various topics related to parenting and education.</p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="font-medium mb-3">Parent Chat</h3>
                <p className="text-gray-500">Real-time chat with other parents and our expert moderators.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Resources</h3>
                <p className="text-gray-500">Access our library of articles, guides, and tools designed for parents.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 py-6">
        <div className="container-custom text-center text-gray-500">
          <p>© {new Date().getFullYear()} KnowMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ParentCommunity;
