import React, { useState, useEffect } from 'react';
import Navbar from './ParentCommunityNavbar'; // Import Navbar
import Footer from './Footer'; // Import Footer
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle, Send } from 'lucide-react';

// Mock data - replace with actual API calls in production
const INITIAL_POSTS = [
  {
    id: 1,
    author: 'Сара Джонсън',
    avatar: 'https://i.pravatar.cc/150?img=32',
    date: '2023-05-15T10:30:00',
    content: 'Някой пробвал ли е новия курс по програмиране за деца на възраст 10–12 години? Дъщеря ми проявява интерес, но не съм сигурна дали си заслужава инвестицията.',
    category: 'Препоръка за курс',
    likes: 5,
    comments: [
      {
        id: 101,
        author: 'Майкъл Чен',
        avatar: 'https://i.pravatar.cc/150?img=53',
        date: '2023-05-15T11:45:00',
        content: 'Синът ми го изкара миналия семестър и беше във възторг! Преподавателят обяснява сложните понятия по достъпен и забавен начин.'
      }
    ]
  },
  {
    id: 2,
    author: 'Дейвид Милър',
    avatar: 'https://i.pravatar.cc/150?img=65',
    date: '2023-05-14T16:20:00',
    content: 'Търся препоръки за извънкласни занимания за интровертно 8-годишно дете, което обожава науката, но се притеснява в големи групи. Някакви идеи?',
    category: 'Съвети за дейности',
    likes: 8,
    comments: [
      {
        id: 201,
        author: 'Ема Уилсън',
        avatar: 'https://i.pravatar.cc/150?img=45',
        date: '2023-05-14T17:30:00',
        content: 'В музея по природни науки в нашия район има работилници с малки групи – до 6 деца, с много практическа работа. Може да са идеални!'
      },
      {
        id: 202,
        author: 'Прия Шарма',
        avatar: 'https://i.pravatar.cc/150?img=28',
        date: '2023-05-14T18:15:00',
        content: 'Дъщеря ми беше същата – записахме я в индивидуална програма по наука, която много ѝ помогна да изгради увереност, преди да премине към малки групи.'
      }
    ]
  }
];


interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

interface Post {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  category: string;
  likes: number;
  comments: Comment[];
}

const ParentCommunity: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('');
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [showCommentField, setShowCommentField] = useState<{ [key: number]: boolean }>({});

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const handleNewPost = () => {
    if (newPostContent.trim() === '') return;

    const newPost: Post = {
      id: Date.now(),
      author: 'Current User', // Would come from authentication
      avatar: 'https://i.pravatar.cc/150?img=5',
      date: new Date().toISOString(),
      content: newPostContent,
      category: newPostCategory || 'General',
      likes: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setNewPostCategory('');
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const toggleCommentField = (postId: number) => {
    setShowCommentField({
      ...showCommentField,
      [postId]: !showCommentField[postId]
    });
  };

  const handleCommentChange = (postId: number, value: string) => {
    setCommentInputs({
      ...commentInputs,
      [postId]: value
    });
  };

  const submitComment = (postId: number) => {
    const commentContent = commentInputs[postId];
    if (!commentContent || commentContent.trim() === '') return;

    const newComment: Comment = {
      id: Date.now(),
      author: 'Current User', // Would come from authentication
      avatar: 'https://i.pravatar.cc/150?img=5',
      date: new Date().toISOString(),
      content: commentContent
    };

    setPosts(posts.map(post =>
        post.id === postId
            ? { ...post, comments: [...post.comments, newComment] }
            : post
    ));

    // Clear the comment input
    setCommentInputs({
      ...commentInputs,
      [postId]: ''
    });
  };

  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="container mx-auto max-w-3xl py-8">
        <h1 className="text-3xl font-bold mb-2">
          Форум за родители
        </h1>
        <p className="text-gray-600 mb-6">
          Споделяйте опит, задавайте въпроси и се свързвайте с други родители
        </p>

        {/* Create new post */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Създай публикация
          </h2>
          <Textarea
              className="w-full mb-4"
              placeholder="Share your thoughts, questions, or advice..."
              rows={3}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <Input
                className="w-[60%]"
                placeholder="Category (e.g., Course Recommendation, Activity Advice)"
                value={newPostCategory}
                onChange={(e) => setNewPostCategory(e.target.value)}
            />
            <Button
                variant="default"
                onClick={handleNewPost}
                disabled={newPostContent.trim() === ''}
            >
              <Send className="mr-2 h-4 w-4" /> Публикувай
            </Button>
          </div>
        </div>

        {/* Posts list */}
        {posts.map(post => (
            <Card key={post.id} className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="outline">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <p className="mb-4">
                  {post.content}
                </p>

                <div className="flex items-center mt-4">
                  <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" /> Харесай ({post.likes})
                  </Button>
                  <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCommentField(post.id)}
                      className="ml-4"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Коментирай ({post.comments.length})
                  </Button>
                </div>

                {/* Comments section */}
                {post.comments.length > 0 && (
                    <div className="mt-4">
                      <Separator className="my-4" />
                      <h3 className="font-semibold mb-2">
                        Коментари
                      </h3>
                      {post.comments.map(comment => (
                          <div key={comment.id} className="flex mb-4">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src={comment.avatar} alt={comment.author} />
                              <AvatarFallback>{comment.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="bg-gray-100 rounded p-3 w-full">
                              <div className="flex justify-between">
                                <span className="font-medium">{comment.author}</span>
                                <span className="text-xs text-gray-500">
                          {formatDate(comment.date)}
                        </span>
                              </div>
                              <p className="text-sm">{comment.content}</p>
                            </div>
                          </div>
                      ))}
                    </div>
                )}

                {/* Comment input field */}
                {showCommentField[post.id] && (
                    <div className="flex mt-4 items-start">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Current User" />
                        <AvatarFallback>CU</AvatarFallback>
                      </Avatar>
                      <Textarea
                          placeholder="Write a comment..."
                          className="min-h-[80px] mr-2"
                          value={commentInputs[post.id] || ''}
                          onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      />
                      <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => submitComment(post.id)}
                          disabled={!commentInputs[post.id] || commentInputs[post.id].trim() === ''}
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                )}
              </CardContent>
            </Card>
        ))}
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default ParentCommunity;

