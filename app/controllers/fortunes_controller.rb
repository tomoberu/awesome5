class FortunesController < ApplicationController

  def index
    @fortunes = Fortune.all
    @sakes = Sake.all
    @words = Word.all
  end

  def show
    @fortune = Fortune.find(params[:id])
    @sake = Sake.find(params[:id])
    @word = Word.find(params[:id])
  end

  private

  def item_params
    params.require(:foutune).permit(:text)
  end


end
