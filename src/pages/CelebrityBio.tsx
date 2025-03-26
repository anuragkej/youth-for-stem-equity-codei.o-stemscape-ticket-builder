
import React, { useState } from 'react';
import { User, Upload, Save, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CelebrityBio = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-stem-blue mb-4">
          Celebrity Bio Page
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create a biography for your chosen celebrity. Add their photo, name, and interesting facts about them.
        </p>
        
        {/* Task Progress Indicators */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <span className="task-indicator task-todo">
            Add Photo
          </span>
          <span className="task-indicator task-todo">
            Write Bio
          </span>
          <span className="task-indicator task-todo">
            Add Achievement List
          </span>
        </div>
      </div>
      
      <div className="bio-container animate-fadeIn animation-delay-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Celebrity Photo Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-stem-blue mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Photo
            </h2>
            
            {image ? (
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt="Celebrity" 
                  className="w-full h-auto object-cover"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute bottom-2 right-2 bg-white bg-opacity-75"
                  onClick={() => setImage(null)}
                >
                  Change Photo
                </Button>
              </div>
            ) : (
              <div className="photo-placeholder">
                {isUploading ? (
                  <div className="text-center">
                    <div className="animate-pulse mb-2">Uploading...</div>
                    <div className="w-8 h-8 border-2 border-stem-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-2">Upload Celebrity Photo</p>
                    <label className="cursor-pointer">
                      <span className="bg-stem-blue text-white py-1 px-3 rounded-md text-sm hover:bg-opacity-90 transition-colors">
                        Select Image
                      </span>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                )}
              </div>
            )}
            
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Remember to use an appropriate, school-friendly image of your chosen celebrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Celebrity Bio Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stem-blue mb-4">
                Celebrity Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="code-snippet">
                    &lt;h2 class="text-2xl font-bold"&gt;[Celebrity Name]&lt;/h2&gt;
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-md">
                    <p className="text-sm italic">
                      Replace [Celebrity Name] with the name of your chosen celebrity.
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Biography
                  </label>
                  <div className="code-snippet">
                    &lt;p&gt;
                      [Write a short biography about the celebrity here. Include information about their
                      career, achievements, and why they are famous.]
                    &lt;/p&gt;
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-md">
                    <p className="text-sm italic">
                      Write 2-3 paragraphs about your celebrity. Use &lt;p&gt; tags for each paragraph.
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notable Achievements
                  </label>
                  <div className="code-snippet">
                    &lt;ul&gt;
                      &lt;li&gt;[Achievement 1]&lt;/li&gt;
                      &lt;li&gt;[Achievement 2]&lt;/li&gt;
                      &lt;li&gt;[Achievement 3]&lt;/li&gt;
                    &lt;/ul&gt;
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-md">
                    <p className="text-sm italic">
                      List at least 3 notable achievements of your celebrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-stem-blue mb-2">
                Connection to STEM
              </h3>
              <div className="code-snippet">
                &lt;p&gt;
                  [Explain how this celebrity is connected to Science, Technology, Engineering, or Mathematics.
                  What contributions have they made to STEM fields?]
                &lt;/p&gt;
              </div>
              <div className="bg-yellow-100 p-3 rounded-md">
                <p className="text-sm italic">
                  Explain the connection between your celebrity and any STEM field. If they're not directly
                  involved in STEM, you can get creative about finding connections!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
          <Button 
            className="bg-stem-blue hover:bg-stem-blue hover:opacity-90 text-white transition-all duration-200 transform hover:scale-105 flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Bio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CelebrityBio;
