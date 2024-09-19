import React, { Component } from 'react'

export class CreateProject extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <form className="g-3 mb-6 row ">
                        <div className="col-md-8 col-sm-6">
                            <div className="form-floating">
                                <input placeholder="Project title" type="text" id="project_title" className="form-control" name='project_title' />
                                <label htmlFor="floatingSelect text-black">Works with selects</label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option select="true">Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </select>
                                <label htmlFor="floatingSelect text-black">Works with selects</label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectPrivacy">
                                <option>Select privacy</option>
                                <option defaultValue="1">Data Privacy One</option>
                                <option defaultValue="2">Data Privacy Two</option>
                                <option defaultValue="3">Data Privacy Three</option>
                            </select><label htmlFor="floatingSelectPrivacy">Project privacy</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectTeam">
                                <option>Select team</option>
                                <option defaultValue="1">Team One</option>
                                <option defaultValue="2">Team Two</option>
                                <option defaultValue="3">Team Three</option>
                            </select><label htmlFor="floatingSelectTeam">Team</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectAssignees">
                                <option>Select assignees</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                            </select><label htmlFor="floatingSelectAssignees">People</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectAdmin">
                                <option>Select admin</option>
                                <option defaultValue="1">Data Privacy One</option>
                                <option defaultValue="2">Data Privacy Two</option>
                                <option defaultValue="3">Data Privacy Three</option>
                            </select><label htmlFor="floatingSelectAdmin">Project Lead</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><input placeholder="Project title" type="text" id="startDate"
                                className="form-control flatpickr-input" readOnly="readonly" />
                                <label htmlFor="startDate">Start date</label>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><input placeholder="Deadline" type="text" id="deadline"
                                className="form-control flatpickr-input" readOnly="readonly" />
                                <label htmlFor="deadline">Deadline</label>
                            </div>

                        </div>
                        <div className="my-4 col-12">
                            <div className="form-floating"><textarea placeholder="Leave a comment here" id="floatingProjectOverview"
                                className="form-control"></textarea><label htmlFor="floatingProjectOverview">Project
                                    overview</label></div>
                        </div>
                        <div className="my-4 col-md-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectClient">
                                <option>Select client</option>
                                <option defaultValue="1">Client One</option>
                                <option defaultValue="2">Client Two</option>
                                <option defaultValue="3">Client Three</option>
                            </select><label htmlFor="floatingSelectClient">Client</label></div>
                        </div>
                        <div className="gy-6 col-md-2 my-auto mx-4">
                            <div className="form-floating"><input placeholder="Budget" type="number" id="floatingInputBudget"
                                className="form-control" /><label htmlFor="floatingInputBudget">Budget $</label></div>
                        </div>

                        <div className="gy-6 col-12">
                            <div className="d-flex justify-content-end gap-3"><button type="button"
                                className="px-5 btn btn-phoenix-primary">Cancel</button><button type="button"
                                    className="px-5 px-sm-15 btn btn-primary">Create Project</button></div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default CreateProject
