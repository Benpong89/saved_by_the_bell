class Api::ProfileCategoriesController < ApplicationController
  def index
    @profile_categories = ProfileCategory.all
  end

  def create
    @profile_category = ProfileCategory.new(profile_category_params)
    if @profile_category.save
      render :create
    else
      render json: ['invalid profile_category'], status: 401
    end
  end

  def show
    @profile_category = ProfileCategory.find(params[:id])
  end

  def destroy
    @profile_category = ProfileCategory.find(params[:id])
    @profile_category.destroy
    render :show
  end


  def profile_category_params
    params.require(:profile_category).permit(:profile_id, :category_id)
  end
end
