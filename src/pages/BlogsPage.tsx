import React, { useState } from 'react';
import { PageType, BlogPost } from '../types';
import { BLOGS } from '../data/blogs';
import { ArrowRight, Search, BookOpen, Clock, User, Calendar } from 'lucide-react';

interface BlogsPageProps {
  onNavigate: (page: PageType) => void;
  onSelectBlog: (blog: BlogPost) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate, onSelectBlog }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Dog Care', label: 'Dog Care' },
    { id: 'Cat Care', label: 'Cat Care' },
    { id: 'Nutrition Guide', label: 'Nutrition Guide' },
    { id: 'Pet Health', label: 'Pet Health' },
  ];

  const filteredBlogs = BLOGS.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* Hero Header */}
      <section className="bg-[#FAF6F0] py-12 sm:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Blogs</span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              PET CARE KNOWLEDGE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            BORCELLE Pet Care Tips
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Read expert articles on canine and feline nutrition, dietary transition guides, hairball prevention, and everyday health tips from veterinary specialists.
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog List Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-100 text-amber-900 shadow-2xs'
                    : 'bg-stone-100 text-slate-600 hover:bg-stone-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="p-12 text-center bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
              <p className="text-slate-600 text-sm font-medium">No blog articles found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="text-xs text-amber-700 font-bold underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-5 space-y-4">
                    <div className="h-48 rounded-xl overflow-hidden bg-stone-50">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full uppercase">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-amber-700 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                      {blog.shortDescription}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-stone-100">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-amber-600" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                    <button
                      onClick={() => onSelectBlog(blog)}
                      className="w-full text-left text-xs font-bold text-slate-900 hover:text-amber-600 pt-3 flex items-center justify-between cursor-pointer"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
