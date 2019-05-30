from rest_framework import routers
from human_resources import views

app_name = 'human_resources'

router = routers.DefaultRouter()
router.register(r'^users', views.UserProfileView)

urlpatterns = router.urls