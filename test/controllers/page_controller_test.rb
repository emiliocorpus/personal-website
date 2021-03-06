require 'test_helper'

class PageControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get projects" do
    get :projects
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get blogs" do
    get :blogs
    assert_response :success
  end

end
