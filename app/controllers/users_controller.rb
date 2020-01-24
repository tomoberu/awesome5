class UsersController < ApplicationController
  def index
    @users = User.new
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.create
  end

  def edit
  end

end
