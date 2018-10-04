class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render :create
    else
      render json: ['invalid category'], status: 401
    end
  end

  def show
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:id, :category)
  end
end
