class ContactsController < ApplicationController
  def create
    @contact = Contact.new(contact_params)
    @contact.request = request

    if @contact.deliver
      redirect_to :root
      flash[:notice] = 'Message sent successfully, we will contact you shortly'
    else
      redirect_to :root
      flash[:alert] = 'Cannot send message.'
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
