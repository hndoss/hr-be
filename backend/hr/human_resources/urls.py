from rest_framework import routers
from human_resources import views
from django.urls import path, include

app_name = 'human_resources'

router = routers.DefaultRouter()
router.register(r'^users', views.UserProfileView)
router.register(r'^departments', views.DepartmentView)
router.register(r'^jobs', views.JobView)
router.register(r'^absences', views.AbsenceView)

urlpatterns = [
    path("xml", views.XmlView.as_view()),
    path("", include(router.urls))
]
