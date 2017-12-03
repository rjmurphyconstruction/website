class HomeController < ApplicationController
  def index
    @contact = Contact.new
  end
end
