class Api::ProfilesController < ApplicationController
  # check to make sure profile.published == true before return all profiles.
  def index
    # @profiles = Profile.all
    @profiles = Profile.all.where(published: true)
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render :show
    else
      render json: ['invalid profile'], status: 401
    end
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def update
    @profile = Profile.find(params[:id].to_i)
    if @profile.update(profile_params)
      render :show
    else
      render json: ['cannot update profile'], status: 422
    end
  end

  def destroy
    @profile = Profile.find(params[:id])
    @profile.destroy
    render :show
  end

  def profile_params
    params.require(:profile).permit(:id, :fullname, :email, :zipcode, :summary, :description, :published, :imgURL, :resumeLink, :user_id, :categories)
  end
end
