import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, User, CheckCircle2, Share2 } from 'lucide-react';

interface BlogDetailModalProps {
  blog: BlogPost | null;
  onClose: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({ blog, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!blog) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 uppercase tracking-wider">
            {blog.category}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-stone-500 hover:text-slate-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer text-xs flex items-center gap-1"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
              {copied && <span className="text-[10px] text-emerald-600 font-bold">Link Copied!</span>}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-slate-800 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-stone-200">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="w-3.5 h-3.5 text-amber-600" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              {blog.readTime}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-100 shadow-xs">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
            {blog.contentParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#FAF6F0] border border-amber-200/80 rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Key Article Takeaways
            </h3>
            <ul className="space-y-2">
              {blog.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
