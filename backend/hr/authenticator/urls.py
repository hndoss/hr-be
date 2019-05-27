from rest_framework import routers
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

app_name = 'authenticator'

urlpatterns = [
    url(r'^login', obtain_jwt_token),
    url(r'^token-refresh/', refresh_jwt_token),
    url(r'^token-verify/', verify_jwt_token),
    # url(r'^auth/singup/$', views.SingupView.as_view()),
    # url(r'^auth/ui-routes/$', views.UIRouteView.as_view()),
]