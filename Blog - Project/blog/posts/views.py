from django.shortcuts import render , redirect
from django.views.generic import ListView , DetailView , CreateView , UpdateView , DeleteView
from .models import Post
from .forms import PostForm , EditForm
from django.urls import reverse_lazy
# def home(request):
#     return render(request, 'posts/mainPage.html',{} )

class HomeView(ListView):
    model = Post
    template_name = 'posts/mainPage.html'
    ordering = ['-id']

class PostView(DetailView):
    model = Post
    template_name = 'posts/specificPost.html'

class AddView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'posts/form.html'
    # fields = '__all__'
    
    def form_valid(self, form):
    
        return super().form_valid(form)

    
    def form_invalid(self, form):
        
        return self.render_to_response({'form': form})

class EditView(UpdateView):
    model = Post
    form_class = EditForm
    template_name = "posts/update.html"
    # fields = ['title', 'title_tag', 'content']

class CascadeView(DeleteView):
    model = Post
    template_name = "posts/delete.html"
    success_url = reverse_lazy('home')


class AllView(ListView):
    model = Post
    template_name = 'posts/allPosts.html'
    ordering = ['-id']

