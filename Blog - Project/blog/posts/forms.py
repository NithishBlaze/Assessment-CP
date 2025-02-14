from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title','title_tag','author','content','image')

        widgets = {
            'title' : forms.TextInput(attrs={'class' : 'form-control','placeholder' : 'Enter the title !'}),
            'title_tag' : forms.TextInput(attrs={'class' : 'form-control'}),
            'author' : forms.Select(attrs={'class' : 'form-control'}),
            'content' : forms.Textarea(attrs={'class' : 'form-control'})
        }

class EditForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title','title_tag','content')

        widgets = {
            'title' : forms.TextInput(attrs={'class' : 'form-control','placeholder' : 'Enter the title !'}),
            'title_tag' : forms.TextInput(attrs={'class' : 'form-control'}),
            'content' : forms.Textarea(attrs={'class' : 'form-control'})
        }