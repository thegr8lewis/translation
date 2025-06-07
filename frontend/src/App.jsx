// import React, { useState } from 'react';
// import { Search, Menu, Bell, User, Clock, Eye, Share2, Bookmark } from 'lucide-react';

// const NewsApp = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
  
//   const categories = ['All', 'Technology', 'Business', 'Sports', 'Health', 'Science'];
  
//   const newsData = [
//     {
//       id: 1,
//       title: "Revolutionary AI Technology Transforms Healthcare Industry",
//       summary: "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics across hospitals worldwide.",
//       category: "Technology",
//       author: "Sarah Johnson",
//       publishedAt: "2 hours ago",
//       readTime: "5 min read",
//       views: "12.5K",
//       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Global Markets Show Strong Recovery After Recent Volatility",
//       summary: "Stock markets worldwide demonstrate resilience as investors regain confidence following last week's economic uncertainties.",
//       category: "Business",
//       author: "Michael Chen",
//       publishedAt: "4 hours ago",
//       readTime: "3 min read",
//       views: "8.2K",
//       image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
//       featured: false
//     },
//     {
//       id: 3,
//       title: "Olympic Training Facilities Embrace Sustainable Technology",
//       summary: "Athletes prepare for upcoming competitions using eco-friendly equipment and renewable energy-powered training centers.",
//       category: "Sports",
//       author: "Emma Rodriguez",
//       publishedAt: "6 hours ago",
//       readTime: "4 min read",
//       views: "6.7K",
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Breakthrough in Cancer Research Offers New Hope",
//       summary: "Scientists discover promising treatment method that shows significant improvement in early clinical trials.",
//       category: "Health",
//       author: "Dr. James Wilson",
//       publishedAt: "8 hours ago",
//       readTime: "6 min read",
//       views: "15.3K",
//       image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "Space Mission Reveals Stunning Images of Distant Galaxy",
//       summary: "Latest telescope observations provide unprecedented views of stellar formations billions of light-years away.",
//       category: "Science",
//       author: "Dr. Lisa Park",
//       publishedAt: "10 hours ago",
//       readTime: "4 min read",
//       views: "9.1K",
//       image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop",
//       featured: false
//     },
//     {
//       id: 6,
//       title: "Tech Giants Announce Major Climate Initiative",
//       summary: "Leading technology companies pledge billions toward carbon neutrality and sustainable innovation projects.",
//       category: "Technology",
//       author: "Alex Thompson",
//       publishedAt: "12 hours ago",
//       readTime: "5 min read",
//       views: "11.8K",
//       image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
//       featured: false
//     }
//   ];

//   const filteredNews = activeCategory === 'All' 
//     ? newsData 
//     : newsData.filter(article => article.category === activeCategory);

//   const featuredArticle = newsData.find(article => article.featured);
//   const regularArticles = filteredNews.filter(article => !article.featured);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-4">
//               <Menu className="h-6 w-6 text-gray-600 md:hidden" />
//               <h1 className="text-2xl font-bold text-gray-900">NewsHub</h1>
//             </div>
            
//             <div className="hidden md:flex items-center space-x-8">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search news..."
//                   className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
//               <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
//                 <User className="h-5 w-5 text-white" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8 overflow-x-auto py-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors ${
//                   activeCategory === category
//                     ? 'bg-blue-500 text-white'
//                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Featured Article */}
//         {featuredArticle && activeCategory === 'All' && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="md:flex">
//                 <div className="md:w-1/2">
//                   <img
//                     src={featuredArticle.image}
//                     alt={featuredArticle.title}
//                     className="w-full h-64 md:h-full object-cover"
//                   />
//                 </div>
//                 <div className="md:w-1/2 p-8">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
//                       {featuredArticle.category}
//                     </span>
//                     <span className="text-gray-500 text-sm">•</span>
//                     <span className="text-gray-500 text-sm">{featuredArticle.publishedAt}</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
//                     {featuredArticle.title}
//                   </h3>
//                   <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//                     {featuredArticle.summary}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-4 text-sm text-gray-500">
//                       <span className="font-medium">{featuredArticle.author}</span>
//                       <div className="flex items-center space-x-1">
//                         <Clock className="h-4 w-4" />
//                         <span>{featuredArticle.readTime}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Eye className="h-4 w-4" />
//                         <span>{featuredArticle.views}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
//                         <Share2 className="h-4 w-4" />
//                       </button>
//                       <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
//                         <Bookmark className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* News Grid */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">
//             {activeCategory === 'All' ? 'Latest News' : `${activeCategory} News`}
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {regularArticles.map((article) => (
//               <article
//                 key={article.id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
//                       {article.category}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
//                     {article.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
//                     {article.summary}
//                   </p>
                  
//                   <div className="flex items-center justify-between text-xs text-gray-500">
//                     <div className="flex items-center space-x-3">
//                       <span className="font-medium">{article.author}</span>
//                       <span>•</span>
//                       <span>{article.publishedAt}</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                     <div className="flex items-center space-x-4 text-xs text-gray-500">
//                       <div className="flex items-center space-x-1">
//                         <Clock className="h-3 w-3" />
//                         <span>{article.readTime}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Eye className="h-3 w-3" />
//                         <span>{article.views}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
//                         <Share2 className="h-3 w-3" />
//                       </button>
//                       <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
//                         <Bookmark className="h-3 w-3" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewsApp;

import React, { useState, useEffect } from 'react';
import { Search, Menu, Bell, User, Clock, Eye, Share2, Bookmark } from 'lucide-react';

const NewsApp = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTranslated, setIsTranslated] = useState(false);
  
  const categories = ['All', 'Technology', 'Business', 'Sports', 'Health', 'Science'];
  
  const newsData = [
    {
      id: 1,
      title: "Revolutionary AI Technology Transforms Healthcare Industry",
      summary: "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnostics across hospitals worldwide.",
      category: "Technology",
      author: "Sarah Johnson",
      publishedAt: "2 hours ago",
      readTime: "5 min read",
      views: "12.5K",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Global Markets Show Strong Recovery After Recent Volatility",
      summary: "Stock markets worldwide demonstrate resilience as investors regain confidence following last week's economic uncertainties.",
      category: "Business",
      author: "Michael Chen",
      publishedAt: "4 hours ago",
      readTime: "3 min read",
      views: "8.2K",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Olympic Training Facilities Embrace Sustainable Technology",
      summary: "Athletes prepare for upcoming competitions using eco-friendly equipment and renewable energy-powered training centers.",
      category: "Sports",
      author: "Emma Rodriguez",
      publishedAt: "6 hours ago",
      readTime: "4 min read",
      views: "6.7K",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Breakthrough in Cancer Research Offers New Hope",
      summary: "Scientists discover promising treatment method that shows significant improvement in early clinical trials.",
      category: "Health",
      author: "Dr. James Wilson",
      publishedAt: "8 hours ago",
      readTime: "6 min read",
      views: "15.3K",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Space Mission Reveals Stunning Images of Distant Galaxy",
      summary: "Latest telescope observations provide unprecedented views of stellar formations billions of light-years away.",
      category: "Science",
      author: "Dr. Lisa Park",
      publishedAt: "10 hours ago",
      readTime: "4 min read",
      views: "9.1K",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Tech Giants Announce Major Climate Initiative",
      summary: "Leading technology companies pledge billions toward carbon neutrality and sustainable innovation projects.",
      category: "Technology",
      author: "Alex Thompson",
      publishedAt: "12 hours ago",
      readTime: "5 min read",
      views: "11.8K",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
      featured: false
    }
  ];

  const translateToSomali = (e) => {
    e.preventDefault();
    if (!isTranslated) {
      const currentUrl = window.location.href;
      const googleTranslateUrl = `https://translate.google.com/translate?hl=so&sl=en&tl=so&u=${encodeURIComponent(currentUrl)}`;
      window.location.href = googleTranslateUrl;
      setIsTranslated(true);
    }
  };

  const returnToEnglish = (e) => {
    e.preventDefault();
    if (isTranslated) {
      // Attempt to revert smoothly without triggering the popup
      const urlParams = new URLSearchParams(window.location.search);
      const originalUrl = urlParams.get('u');

      if (originalUrl) {
        // Use meta refresh to reload the original URL in the same tab with a delay
        const meta = document.createElement('meta');
        meta.httpEquiv = 'refresh';
        meta.content = `0;url=${decodeURIComponent(originalUrl)}`; // Immediate reload
        document.head.appendChild(meta);
        setIsTranslated(false);
      }
    }
  };

  useEffect(() => {
    if (window.location.href.includes('translate.google.com')) {
      setIsTranslated(true);
      // Attempt to hide Google Translate strip
      const hideTranslateStrip = () => {
        const translateBar = document.querySelector('.skiptranslate.goog-te-gadget');
        if (translateBar) {
          translateBar.style.display = 'none';
        }
        const translateIframe = document.querySelector('iframe.goog-te-banner-frame');
        if (translateIframe) {
          try {
            translateIframe.style.display = 'none';
          } catch (e) {
            console.log('Cross-origin restriction prevented iframe style change:', e);
          }
        }
      };

      setTimeout(hideTranslateStrip, 1000);

      // Add CSS attempt via style tag
      const style = document.createElement('style');
      style.textContent = `
        .skiptranslate.goog-te-gadget, 
        .goog-te-banner-frame, 
        .goog-te-menu-frame,
        .goog-te-ft,
        #goog-gt-tt {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    setActiveCategory(category);
  };

  const filteredNews = activeCategory === 'All' 
    ? newsData 
    : newsData.filter(article => article.category === activeCategory);

  const featuredArticle = newsData.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 text-gray-600 md:hidden" />
              <h1 className="text-2xl font-bold text-gray-900">NewsHub</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector Flags */}
              <div className="flex items-center space-x-2 mr-4">
                <button 
                  onClick={returnToEnglish}
                  className={`w-8 h-6 rounded-sm overflow-hidden border transition-colors ${
                    !isTranslated 
                      ? 'border-blue-500' 
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                  title="English (Kenya)"
                >
                  <img 
                    src="https://flagcdn.com/w40/ke.png" 
                    alt="Kenya Flag" 
                    className="w-full h-full object-cover"
                  />
                </button>
                <button 
                  onClick={translateToSomali}
                  className={`w-8 h-6 rounded-sm overflow-hidden border transition-colors ${
                    isTranslated 
                      ? 'border-blue-500' 
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                  title="Somali"
                >
                  <img 
                    src="https://flagcdn.com/w40/so.png" 
                    alt="Somali Flag" 
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
              
              <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                onClick={(e) => handleCategoryClick(category, e)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Article */}
        {featuredArticle && activeCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Story</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{featuredArticle.publishedAt}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="font-medium">{featuredArticle.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredArticle.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {activeCategory === 'All' ? 'Latest News' : `${activeCategory} News`}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{article.author}</span>
                      <span>•</span>
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-3 w-3" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                        <Bookmark className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsApp;