from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('signin_page',views.signin_page,name='signin_page'),
    path('signup_page',views.signup_page,name='signup_page'),
    path('profile_page',views.profile_page,name='profile_page'),
    path('profile/<str:pk>', views.profile_user, name='profile_user'),
    path('following_page',views.following_page,name='following_page'),
    path('edit_profile',views.edit_profile,name='edit_profile'),
    path('save_post/<uuid:post_id>', views.save_post, name='save_post'),
    path('upload',views.upload,name='upload'),
    path('saved',views.saved,name='saved'),
    path('follow', views.follow, name='follow'),
    path('search', views.search, name='search'),
    path('like_post',views.like_post,name='like_post'),
    path('signup',views.signup,name='signup'),
    path('signin',views.signin,name='signin'),
    path('user_logout',views.user_logout,name='user_logout')
]