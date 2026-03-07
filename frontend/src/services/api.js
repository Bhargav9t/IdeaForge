import axios from "axios";

/**
 * API Service: The central nervous system for backend communication.
 * Connects the React frontend to the FastAPI backend.
 */

// During the hackathon, we use the local FastAPI address.
const API_BASE_URL = "http://127.0.0.1:8001";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  /**
   * Generates a project blueprint graph based on a raw idea.
   * @param {string} prompt - The user's project description.
   */
  generateBlueprint: async (prompt) => {
    try {
      const response = await apiClient.post("/api/generate-graph", { prompt });
      return response.data;
    } catch (error) {
      console.error("Error generating blueprint:", error);
      throw error;
    }
  },

  /**
   * Verifies a specific node's tech stack via the Hallucination Guard.
   * @param {string} nodeId - The unique ID of the node.
   * @param {Array} techStack - The list of technologies to verify.
   */
  verifyNode: async (nodeId, techStack) => {
    try {
      const response = await apiClient.post(`/api/verify-node/${nodeId}`, {
        techStack,
      });
      return response.data;
    } catch (error) {
      console.error("Error verifying node:", error);
      throw error;
    }
  },

  /**
   * Saves the current graph state to the MySQL database.
   */
  saveGraph: async (graphData) => {
    try {
      const response = await apiClient.post("/api/save-graph", graphData);
      return response.data;
    } catch (error) {
      console.error("Error saving graph:", error);
      throw error;
    }
  },
};

export default apiService;
